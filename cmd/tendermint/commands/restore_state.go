package commands

import (
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"

	"github.com/spf13/cobra"
	tmconfig "github.com/tendermint/tendermint/config"
	sm "github.com/tendermint/tendermint/internal/state"
	"github.com/tendermint/tendermint/internal/store"
	tmos "github.com/tendermint/tendermint/libs/os"
	tmstate "github.com/tendermint/tendermint/proto/tendermint/state"
	"github.com/tendermint/tendermint/types"
)

var RestoreStateCmd = &cobra.Command{
	Use:  "restore-state [state] [last-commit]",
	Args: cobra.ExactArgs(2),
	Run:  restoreState,
}

func restoreState(cmd *cobra.Command, args []string) {
	b, err := hex.DecodeString(args[0])
	if err != nil {
		tmos.Exit(fmt.Sprintf("Error parsing state: %v", err))
	}
	stateProto := new(tmstate.State)
	err = stateProto.Unmarshal(b)
	if err != nil {
		tmos.Exit(fmt.Sprintf("Error parsing state: %v", err))
	}
	state, err := sm.FromProto(stateProto)
	if err != nil {
		tmos.Exit(fmt.Sprintf("Error parsing state: %v", err))
	}

	var commit types.Commit
	if err := json.Unmarshal([]byte(args[1]), &commit); err != nil {
		tmos.Exit(fmt.Sprintf("Error parsing commit: %v", err))
	}

	dbProvider := tmconfig.DefaultDBProvider
	blockStoreDB, err := dbProvider(&tmconfig.DBContext{ID: "blockstore", Config: config})
	if err != nil {
		tmos.Exit(fmt.Sprintf("Error loading block store: %v", err))
	}
	defer func() {
		if err := blockStoreDB.Close(); err != nil {
			fmt.Fprintf(os.Stdout, "Error closing block store: %v", err)
		}
	}()
	blockStore := store.NewBlockStore(blockStoreDB)

	stateDB, err := dbProvider(&tmconfig.DBContext{ID: "state", Config: config})
	if err != nil {
		tmos.Exit(fmt.Sprintf("Error loading block store: %v", err))
	}
	defer func() {
		if err := stateDB.Close(); err != nil {
			fmt.Fprintf(os.Stdout, "Error closing block store: %v", err)
		}
	}()
	stateStore := sm.NewStore(stateDB)

	err = stateStore.Bootstrap(*state)
	if err != nil {
		tmos.Exit(fmt.Sprintf("Error bootstrapping state store: %v", err))
	}

	err = blockStore.SaveSeenCommit(state.LastBlockHeight, &commit)
	if err != nil {
		tmos.Exit(fmt.Sprintf("Error storing last seen commit: %v", err))
	}
}

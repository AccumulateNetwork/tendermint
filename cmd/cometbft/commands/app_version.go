package commands

import (
	"fmt"
	"strconv"

	"github.com/spf13/cobra"
)

var SetAppVersionCommand = &cobra.Command{
	Use:   "set-app-version",
	Short: "sets the app version",
	Args:  cobra.ExactArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		// use the parsed config to load the block and state store
		_, stateStore, err := loadStateAndBlockStore(config)
		if err != nil {
			return fmt.Errorf("error loading data: %w", err)
		}

		state, err := stateStore.Load()
		if err != nil {
			return fmt.Errorf("error returning last state: %w", err)
		}

		newVersion, err := strconv.Atoi(args[0])
		if err != nil {
			return fmt.Errorf("error parsing argument: %w", err)
		}

		state.Version.Consensus.App = uint64(newVersion)
		err = stateStore.Save(state)
		if err != nil {
			return fmt.Errorf("error saving state: %w", err)
		}

		err = stateStore.Close()
		if err != nil {
			return fmt.Errorf("error closing state store: %w", err)
		}

		fmt.Println("Set app version to ", newVersion)
		return nil
	},
}

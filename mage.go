// +build mage

package main

import (
	"fmt"
	"path/filepath"

	"github.com/magefile/mage/sh"
)

const (
	name       = "mapp-ui-sdk"
	buildImage = "node:11.7"
)

func Install() error {
	return frontDockerCmd(name+"-install", "", "yarn", "install")
}

func Build() error {
	return frontDockerCmd(name+"-build", "", "yarn", "build")
}

func Shell() error {
	return frontDockerCmd(name+"-shell", "", "bash")
}

func frontDockerCmd(name, port string, cmd ...string) error {
	p, _ := filepath.Abs(".")
	args := []string{"run", "--rm",
		"--name", name,
		"--network", "lana-local",
		"-v", fmt.Sprintf("%v:/front", p),
		"-w", "/front",
		"-it", // Interactve!
	}
	if port != "" {
		args = append(args,
			"--label", "traefik.enable=true",
			"--expose", port,
		)
	}
	args = append(args, buildImage)
	args = append(args, cmd...)
	return sh.RunV("docker", args...)
}

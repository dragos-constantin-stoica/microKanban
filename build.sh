#!/bin/bash

rm *.zip; zip -r kanban_v0.1.zip kanban manifest.json -x "*/\.DS_Store*"
var pxtTargetBundle = {
  "id": "impetus",
  "name": "Impetus",
  "title": "Microsoft MakeCode for 3D worlds",
  "description": "A Blocks / JavaScript code editor for 3D worlds powered by Microsoft MakeCode.",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "compile": {
    "isNative": false,
    "floatingPoint": true,
    "vtableShift": 2
  },
  "bundleddirs": [
    "libs/core"
  ],
  "serial": {
    "useEditor": true
  },
  "runtime": {
    "functionBlocks": true,
    "listsBlocks": true,
    "logicBlocks": true,
    "loopsBlocks": true,
    "mathBlocks": true,
    "textBlocks": true,
    "variablesBlocks": true
  },
  "simulator": {
    "autoRun": true
  },
  "appTheme": {
    "boardName": "Impetus",
    "appLogo": "data:image/png;base64,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",
    "logo": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTk1IDM0IiB3aWR0aD0iMTk1IiBoZWlnaHQ9IjM0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmJ4PSJodHRwczovL2JveHktc3ZnLmNvbSI+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgLTEuMDAwMDAwMDAwMDAwMDAwNCwgLTMuMTAxNjQ5OTk5NjE4NTMwMykiPgogICAgPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMC4wMDAwMDk5OCwgMCwgMS4wMDAwMDAwNywgLTEzMC45NTY1Mjc3MSwgLTEyOC44OTk4NjI4KSIgY3g9IjE2MyIgY3k9IjE0NyIgcng9IjEzIiByeT0iMTMiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDM7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBmaWxsLW9wYWNpdHk6IDAuOTsgc3Ryb2tlLW9wYWNpdHk6IDAuNTsiIGJ4Om9yaWdpbj0iMCAwIi8+CiAgICA8cGF0aCBkPSJNIDQ3LjQ0IDMxIEwgNTIuODEgNC4xIEwgNTYgNC4xIEwgNTAuNjMgMzEgTCA0Ny40NCAzMSBaTSA1Ny43NzIgMzEgTCA2My4xNDIgNC4xIEwgNjYuOTUyIDQuMSBMIDY5LjI5MiAxOC42MiBMIDcwLjE5MiAyNC4xOSBMIDcwLjM1MiAyNC4xOSBMIDczLjIyMiAxOC42MiBMIDgxLjIyMiA0LjEgTCA4NS4wMzIgNC4xIEwgNzkuNjYyIDMxIEwgNzYuNTgyIDMxIEwgNzkuNzAyIDE1LjgzIEMgNzkuOTQ4NyAxNC41OTY3IDgwLjI0ODYgMTMuMjYzMyA4MC42MDIgMTEuODMgQyA4MC45NTUzIDEwLjM5NjcgODEuMjk4NyA5LjA5MzMgODEuNjMyIDcuOTIgTCA4MS40NjIgNy45MiBMIDc4LjIyMiAxMy45IEwgNzAuMzEyIDI4LjE3IEwgNjguNTEyIDI4LjE3IEwgNjYuMDEyIDEzLjkgTCA2NS4xMDIgNy45MiBMIDY0Ljk0MiA3LjkyIEMgNjQuNzc1MyA5LjE0NjcgNjQuNTk4NiAxMC40NjMzIDY0LjQxMiAxMS44NyBDIDY0LjIxODcgMTMuMjc2NyA2NC4wMTIgMTQuNTk2NyA2My43OTIgMTUuODMgTCA2MC43NjIgMzEgTCA1Ny43NzIgMzEgWk0gODYuNjc3IDMxIEwgOTIuMDQ3IDQuMSBMIDk5LjYyNyA0LjEgQyAxMDAuODg3IDQuMSAxMDIuMDM3IDQuMjIzMyAxMDMuMDc3IDQuNDcgQyAxMDQuMTEwMyA0LjcxNjcgMTA0Ljk5NyA1LjEwNjcgMTA1LjczNyA1LjY0IEMgMTA2LjQ3NyA2LjE3MzMgMTA3LjA1MDMgNi44NSAxMDcuNDU3IDcuNjcgQyAxMDcuODcwMyA4LjQ5IDEwOC4wNzcgOS40ODY3IDEwOC4wNzcgMTAuNjYgQyAxMDguMDc3IDEyLjMgMTA3Ljc4MzcgMTMuNzIzMyAxMDcuMTk3IDE0LjkzIEMgMTA2LjYwMzcgMTYuMTMgMTA1Ljc5MDMgMTcuMTIgMTA0Ljc1NyAxNy45IEMgMTAzLjcxNyAxOC42OCAxMDIuNDgwMyAxOS4yNTMzIDEwMS4wNDcgMTkuNjIgQyA5OS42MDcgMTkuOTkzMyA5OC4wMjcgMjAuMTggOTYuMzA3IDIwLjE4IEwgOTIuMDA3IDIwLjE4IEwgODkuODY3IDMxIEwgODYuNjc3IDMxIFogTSA5Mi41MzcgMTcuNTkgTCA5Ni40MjcgMTcuNTkgQyA5OS4yMjAzIDE3LjU5IDEwMS4zMzM2IDE3LjA0MzMgMTAyLjc2NyAxNS45NSBDIDEwNC4yMDAzIDE0Ljg1NjcgMTA0LjkxNyAxMy4yMyAxMDQuOTE3IDExLjA3IEMgMTA0LjkxNyA5LjUxNjcgMTA0LjM5NyA4LjM5IDEwMy4zNTcgNy42OSBDIDEwMi4zMTcgNi45OTY3IDEwMC44MTM3IDYuNjUgOTguODQ3IDYuNjUgTCA5NC43MDcgNi42NSBMIDkyLjUzNyAxNy41OSBaTSAxMDkuMjI3IDMxIEwgMTE0LjU5NyA0LjEgTCAxMjkuNDM3IDQuMSBMIDEyOC45MDcgNi43NyBMIDExNy4yMTcgNi43NyBMIDExNS40OTcgMTUuNSBMIDEyNS4zNzcgMTUuNSBMIDEyNC44MDcgMTguMjEgTCAxMTUuMDA3IDE4LjIxIEwgMTEyLjkxNyAyOC4yOSBMIDEyNC45NjcgMjguMjkgTCAxMjQuMzk3IDMxIEwgMTA5LjIyNyAzMSBaTSAxMzUuMjIgMzEgTCAxNDAuMDEgNi44NSBMIDEzMi4yMiA2Ljg1IEwgMTMyLjc2IDQuMSBMIDE1MS41OCA0LjEgTCAxNTEuMDQgNi44NSBMIDE0My4yMSA2Ljg1IEwgMTM4LjQxIDMxIEwgMTM1LjIyIDMxIFpNIDE1Mi45Njk5IDE5LjE5IEwgMTU1Ljk5OTkgNC4xIEwgMTU5LjIgNC4xIEwgMTU2LjEyOTkgMTkuNDggQyAxNTUuODgzMyAyMC43MDY3IDE1NS43NTk5IDIxLjc4NjcgMTU1Ljc1OTkgMjIuNzIgQyAxNTUuNzU5OSAyNC42NiAxNTYuMTk2NiAyNi4xNSAxNTcuMDY5OSAyNy4xOSBDIDE1Ny45NDMzIDI4LjIzIDE1OS4zMjMzIDI4Ljc1IDE2MS4yMDk5IDI4Ljc1IEMgMTYxLjk3NjYgMjguNzUgMTYyLjcwNjYgMjguNTk2NyAxNjMuMzk5OSAyOC4yOSBDIDE2NC4wOTk5IDI3Ljk5IDE2NC43NDk5IDI3LjUxMzMgMTY1LjM0OTkgMjYuODYgQyAxNjUuOTUgMjYuMiAxNjYuNDc2NiAyNS4zNiAxNjYuOTI5OSAyNC4zNCBDIDE2Ny4zODMzIDIzLjMxMzMgMTY3Ljc1OTkgMjIuMDYzMyAxNjguMDYgMjAuNTkgTCAxNzEuMzc5OSA0LjEgTCAxNzQuNDg5OSA0LjEgTCAxNzEuMTI5OSAyMC43MSBDIDE3MC43NDk5IDIyLjY1IDE3MC4yMzY2IDI0LjMwMzMgMTY5LjU5IDI1LjY3IEMgMTY4Ljk1IDI3LjAzNjcgMTY4LjE5MzMgMjguMTUgMTY3LjMxOTkgMjkuMDEgQyAxNjYuNDQ2NiAyOS44NyAxNjUuNDgzMyAzMC41IDE2NC40Mjk5IDMwLjkgQyAxNjMuMzc2NiAzMS4yOTMzIDE2Mi4yNDk5IDMxLjQ5IDE2MS4wNDk5IDMxLjQ5IEMgMTU4LjMxNjYgMzEuNDkgMTU2LjIxNjYgMzAuNzggMTU0Ljc0OTkgMjkuMzYgQyAxNTMuMjg5OSAyNy45NCAxNTIuNTYgMjUuODIgMTUyLjU2IDIzIEMgMTUyLjU2IDIyLjQyNjcgMTUyLjU5MzMgMjEuODIgMTUyLjY1OTkgMjEuMTggQyAxNTIuNzI2NiAyMC41NCAxNTIuODI5OSAxOS44NzY3IDE1Mi45Njk5IDE5LjE5IFpNIDE3NC42NTU5IDI2Ljc0IEwgMTc2Ljk5NTkgMjQuOTcgQyAxNzcuNzg5MyAyNi4xNzY3IDE3OC43NjU5IDI3LjExMzMgMTc5LjkyNTkgMjcuNzggQyAxODEuMDg1OSAyOC40NTMzIDE4Mi40MTkzIDI4Ljc5IDE4My45MjU5IDI4Ljc5IEMgMTg0Ljc0NTkgMjguNzkgMTg1LjUwOTMgMjguNjY2NyAxODYuMjE1OSAyOC40MiBDIDE4Ni45MjkzIDI4LjE3MzMgMTg3LjUzOTMgMjcuODMgMTg4LjA0NTkgMjcuMzkgQyAxODguNTUyNiAyNi45NTY3IDE4OC45NTU5IDI2LjQyMzMgMTg5LjI1NTkgMjUuNzkgQyAxODkuNTU1OSAyNS4xNjMzIDE4OS43MDU5IDI0LjQ2NjcgMTg5LjcwNTkgMjMuNyBDIDE4OS43MDU5IDIyLjcyIDE4OS4zOTkzIDIxLjg5MzMgMTg4Ljc4NTkgMjEuMjIgQyAxODguMTY1OSAyMC41NTMzIDE4Ny4zNTI2IDE5LjkwMzMgMTg2LjM0NTkgMTkuMjcgTCAxODMuMjI1OSAxNy4zOSBDIDE4Mi4wNzkzIDE2LjY3NjcgMTgxLjEwMjYgMTUuODMgMTgwLjI5NTkgMTQuODUgQyAxNzkuNDg5MyAxMy44NjMzIDE3OS4wODU5IDEyLjYwMzMgMTc5LjA4NTkgMTEuMDcgQyAxNzkuMDg1OSAxMC4wNjMzIDE3OS4yOTkzIDkuMTA2NyAxNzkuNzI1OSA4LjIgQyAxODAuMTQ1OSA3LjMgMTgwLjcyNTkgNi41MSAxODEuNDY1OSA1LjgzIEMgMTgyLjIwNTkgNS4xNDMzIDE4My4wODU5IDQuNjAzMyAxODQuMTA1OSA0LjIxIEMgMTg1LjEzMjYgMy44MSAxODYuMjQ1OSAzLjYxIDE4Ny40NDU5IDMuNjEgQyAxODkuMDU5MyAzLjYxIDE5MC41MjI2IDMuOTY2NyAxOTEuODM1OSA0LjY4IEMgMTkzLjE0OTMgNS4zODY3IDE5NC4yMjkzIDYuMjg2NyAxOTUuMDc1OSA3LjM4IEwgMTkyLjk4NTkgOS4yNyBDIDE5Mi4yNzI2IDguNDUgMTkxLjQ0NTkgNy43NiAxOTAuNTA1OSA3LjIgQyAxODkuNTU5MyA2LjY0IDE4OC40NTkzIDYuMzYgMTg3LjIwNTkgNi4zNiBDIDE4Ni40MzkzIDYuMzYgMTg1Ljc1NTkgNi40ODMzIDE4NS4xNTU5IDYuNzMgQyAxODQuNTU1OSA2Ljk3NjcgMTg0LjA0MjYgNy4zMDMzIDE4My42MTU5IDcuNzEgQyAxODMuMTg5MyA4LjEyMzMgMTgyLjg2OTMgOC41OSAxODIuNjU1OSA5LjExIEMgMTgyLjQzNTkgOS42MjMzIDE4Mi4zMjU5IDEwLjE1MzMgMTgyLjMyNTkgMTAuNyBDIDE4Mi4zMjU5IDExLjc0IDE4Mi42NTkzIDEyLjU4MzMgMTgzLjMyNTkgMTMuMjMgQyAxODMuOTk5MyAxMy44NyAxODQuODI1OSAxNC40OSAxODUuODA1OSAxNS4wOSBMIDE4OC45MjU5IDE2Ljk0IEMgMTkwLjIzOTMgMTcuNyAxOTEuMjQyNiAxOC41NjY3IDE5MS45MzU5IDE5LjU0IEMgMTkyLjYzNTkgMjAuNTEzMyAxOTIuOTg1OSAyMS43NSAxOTIuOTg1OSAyMy4yNSBDIDE5Mi45ODU5IDI0LjQ1IDE5Mi43NTI2IDI1LjU1NjcgMTkyLjI4NTkgMjYuNTcgQyAxOTEuODI1OSAyNy41ODMzIDE5MS4xODU5IDI4LjQ1MzMgMTkwLjM2NTkgMjkuMTggQyAxODkuNTM5MyAyOS45IDE4OC41NTI2IDMwLjQ2NjcgMTg3LjQwNTkgMzAuODggQyAxODYuMjU5MyAzMS4yODY3IDE4NS4wMDI2IDMxLjQ5IDE4My42MzU5IDMxLjQ5IEMgMTgxLjc3NTkgMzEuNDkgMTgwLjA4OTMgMzEuMSAxNzguNTc1OSAzMC4zMiBDIDE3Ny4wNTU5IDI5LjU0NjcgMTc1Ljc0OTMgMjguMzUzMyAxNzQuNjU1OSAyNi43NCBaIiB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsgZmlsbC1vcGFjaXR5OiAwLjk7IHN0cm9rZS1vcGFjaXR5OiAwLjU7IHN0cm9rZS13aWR0aDogMnB4OyB3aGl0ZS1zcGFjZTogcHJlOyIvPgogICAgPGxpbmUgeDE9IjMiIHkxPSIzNC4xMDE3IiB4Mj0iMTk0IiB5Mj0iMzQuMTAxNyIgc3R5bGU9InN0cm9rZS1saW5lY2FwOiByb3VuZDsgc3Ryb2tlLXdpZHRoOiAzOyBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTsgZmlsbC1vcGFjaXR5OiAwLjk7IHN0cm9rZS1vcGFjaXR5OiAwLjU7Ii8+CiAgICA8bGluZSBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAzOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBmaWxsLW9wYWNpdHk6IDAuOTsgc3Ryb2tlLW9wYWNpdHk6IDAuNTsiIHgxPSIzIiB5MT0iOSIgeDI9IjE0IiB5Mj0iOSIvPgogICAgPGxpbmUgc3R5bGU9InN0cm9rZS13aWR0aDogMzsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTsgZmlsbC1vcGFjaXR5OiAwLjk7IHN0cm9rZS1vcGFjaXR5OiAwLjU7IiB4MT0iMyIgeTE9IjE4IiB4Mj0iMTQiIHkyPSIxOCIgYng6b3JpZ2luPSIwIEluZmluaXR5Ii8+CiAgICA8bGluZSBzdHlsZT0ic3Ryb2tlLXdpZHRoOiAzOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBmaWxsLW9wYWNpdHk6IDAuOTsgc3Ryb2tlLW9wYWNpdHk6IDAuNTsiIHgxPSIzIiB5MT0iMjciIHgyPSIxNCIgeTI9IjI3IiBieDpvcmlnaW49Ii0xIC1JbmZpbml0eSIvPgogIDwvZz4KPC9zdmc+",
    "cardLogo": "data:image/png;base64,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",
    "docsLogo": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNDYgMzQiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpieD0iaHR0cHM6Ly9ib3h5LXN2Zy5jb20iPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIC0xLCAtMy4xMDE2NDk5OTk2MTg1MzAzKSI+CiAgICA8ZWxsaXBzZSB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLjAwMDAxLCAwLCAxLCAtMTMwLjk1NjUzLCAtMTI4LjgwOTcxKSIgY3g9IjE2MyIgY3k9IjE0NyIgcng9IjEzIiByeT0iMTMiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDM7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBzdHJva2Utb3BhY2l0eTogMC41OyIgYng6b3JpZ2luPSIwIDAiLz4KICAgIDxsaW5lIHgxPSIzIiB5MT0iMzQiIHgyPSI0NSIgeTI9IjM0IiBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2Utd2lkdGg6IDM7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBzdHJva2Utb3BhY2l0eTogMC41OyIvPgogICAgPGxpbmUgc3R5bGU9InN0cm9rZS13aWR0aDogMzsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTsgc3Ryb2tlLW9wYWNpdHk6IDAuNTsiIHgxPSIzIiB5MT0iOSIgeDI9IjE0IiB5Mj0iOSIvPgogICAgPGxpbmUgc3R5bGU9InN0cm9rZS13aWR0aDogMzsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTsgc3Ryb2tlLW9wYWNpdHk6IDAuNTsiIHgxPSIzIiB5MT0iMTgiIHgyPSIxNCIgeTI9IjE4IiBieDpvcmlnaW49IjAgSW5maW5pdHkiLz4KICAgIDxsaW5lIHN0eWxlPSJzdHJva2Utd2lkdGg6IDM7IHN0cm9rZS1saW5lY2FwOiByb3VuZDsgc3Ryb2tlOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHN0cm9rZS1vcGFjaXR5OiAwLjU7IiB4MT0iMyIgeTE9IjI3IiB4Mj0iMTQiIHkyPSIyNyIgYng6b3JpZ2luPSItMSAtSW5maW5pdHkiLz4KICA8L2c+Cjwvc3ZnPg==",
    "portraitLogo": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNDYgMzQiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpieD0iaHR0cHM6Ly9ib3h5LXN2Zy5jb20iPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIC0xLCAtMy4xMDE2NDk5OTk2MTg1MzAzKSI+CiAgICA8ZWxsaXBzZSB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLjAwMDAxLCAwLCAxLCAtMTMwLjk1NjUzLCAtMTI4LjgwOTcxKSIgY3g9IjE2MyIgY3k9IjE0NyIgcng9IjEzIiByeT0iMTMiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2Utd2lkdGg6IDM7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBzdHJva2Utb3BhY2l0eTogMC41OyIgYng6b3JpZ2luPSIwIDAiLz4KICAgIDxsaW5lIHgxPSIzIiB5MT0iMzQiIHgyPSI0NSIgeTI9IjM0IiBzdHlsZT0ic3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2Utd2lkdGg6IDM7IHN0cm9rZTogcmdiKDI1NSwgMjU1LCAyNTUpOyBzdHJva2Utb3BhY2l0eTogMC41OyIvPgogICAgPGxpbmUgc3R5bGU9InN0cm9rZS13aWR0aDogMzsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTsgc3Ryb2tlLW9wYWNpdHk6IDAuNTsiIHgxPSIzIiB5MT0iOSIgeDI9IjE0IiB5Mj0iOSIvPgogICAgPGxpbmUgc3R5bGU9InN0cm9rZS13aWR0aDogMzsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTsgc3Ryb2tlLW9wYWNpdHk6IDAuNTsiIHgxPSIzIiB5MT0iMTgiIHgyPSIxNCIgeTI9IjE4IiBieDpvcmlnaW49IjAgSW5maW5pdHkiLz4KICAgIDxsaW5lIHN0eWxlPSJzdHJva2Utd2lkdGg6IDM7IHN0cm9rZS1saW5lY2FwOiByb3VuZDsgc3Ryb2tlOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHN0cm9rZS1vcGFjaXR5OiAwLjU7IiB4MT0iMyIgeTE9IjI3IiB4Mj0iMTQiIHkyPSIyNyIgYng6b3JpZ2luPSItMSAtSW5maW5pdHkiLz4KICA8L2c+Cjwvc3ZnPg==",
    "logoUrl": "/pxt-Impetus/",
    "homeUrl": "/pxt-Impetus/",
    "betaUrl": "https://github.com/muddytummy/pxt-Impetus#readme",
    "privacyUrl": "https://makecode.com/privacy",
    "termsOfUseUrl": "https://makecode.com/termsofuse",
    "docMenu": [
      {
        "name": "About",
        "path": "/pxt-Impetus/docs/about.html"
      },
      {
        "name": "Docs",
        "path": "/pxt-Impetus/docs/docs.html"
      }
    ],
    "coloredToolbox": true,
    "monacoToolbox": true,
    "invertedMenu": true,
    "showHomeScreen": true,
    "blocklyOptions": {
      "grid": {
        "spacing": 20,
        "length": 2,
        "colour": "rgba(189, 195, 199, 0.20)",
        "snap": true
      }
    },
    "blockColors": {
      "design": "#2680d9",
      "object": "#7f26d9",
      "scene": "#d92680",
      "world": "#d92626",
      "loops": "#80d926",
      "logic": "#2699d9",
      "variables": "#FF6680",
      "math": "#9966ff",
      "advanced": "#00272B",
      "functions": "#d97f26",
      "arrays": "#26d926",
      "text": "#2699d9",
      "console": "#002050"
    },
    "simAnimationEnter": "fly right in",
    "simAnimationExit": "fly right out",
    "extendEditor": true,
    "monacoColors": {
      "editor.background": "#ecf0f1"
    },
    "TOC": [
      {
        "name": "About",
        "subitems": [],
        "path": "/about",
        "nextName": "Blocks",
        "nextPath": "/blocks"
      },
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "prevName": "About",
        "prevPath": "/about",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
            "nextName": "About",
            "nextPath": "/about"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "About",
            "subitems": [],
            "path": "/about",
            "prevName": "Function",
            "prevPath": "/types/function",
            "nextName": "Support",
            "nextPath": "/support"
          },
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "About",
            "prevPath": "/about",
            "nextName": "FAQ",
            "nextPath": "/faq"
          },
          {
            "name": "FAQ",
            "subitems": [],
            "path": "/faq",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "FAQ",
            "prevPath": "/faq",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Function",
        "prevPath": "/types/function"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Blocks Embed",
            "nextPath": "/blocks-embed"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code"
          }
        ],
        "prevName": "Offline support",
        "prevPath": "/offline"
      }
    ],
    "embedUrl": "https://muddytummy.github.io/pxt-Impetus/",
    "id": "impetus",
    "title": "Microsoft MakeCode for 3D worlds",
    "name": "Impetus",
    "description": "A Blocks / JavaScript code editor for 3D worlds powered by Microsoft MakeCode.",
    "appLogoCDN": "@cdnUrl@/blob/4490cf1290fd6e2d9000fe93b6178e118b5d8164/static/icons/android-chrome-192x192.png",
    "logoCDN": "@cdnUrl@/blob/a4f8a47ec2aeaea69ed9faa1d196454afe1545f7/static/logo.wide.white.svg",
    "cardLogoCDN": "@cdnUrl@/blob/4490cf1290fd6e2d9000fe93b6178e118b5d8164/static/icons/android-chrome-192x192.png",
    "docsLogoCDN": "@cdnUrl@/blob/3f93141f73356d19121f0a362054e24a285efc8f/static/logo.square.white.svg",
    "portraitLogoCDN": "@cdnUrl@/blob/3f93141f73356d19121f0a362054e24a285efc8f/static/logo.square.white.svg",
    "htmlDocIncludes": {}
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": " ",
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
      "main.ts": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": " ",
      "main.ts": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "",
      "impetus.api.d.ts": "/*\n    MIT License\n\n    Copyright (c) 2018 MuddyTummy Software LLC\n*/\n\n/// <reference path='impetus.enums.d.ts'/>\n\ndeclare namespace fieldeditors {\n    /**\n     * Render a boolean as a on/off toggle.\n     */\n    //% blockId=fieldeditors_toggleOnOff\n    //% block=\"%on\"\n    //% on.fieldEditor=toggleonoff\n    //% on.fieldOptions.decompileLiterals=true\n    //% shim=TD_ID blockHidden=1\n    function onOff(on: boolean): boolean;\n}\n\n//% color=\"#80d926\" icon=\"\\uf01e\" block=\"Loops\"\ndeclare namespace loops {\n    /**\n     * Repeats the code forever in the background. On each iteration, allows other code to run.\n     * @param body the code to repeat\n     */\n    //% blockId=loops_forever\n    //% block=\"forever\" weight=55\n    //% shim=loops::forever\n    function forever(body: () => void): void;\n\n    /**\n     * Pause for the specified time in milliseconds.\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\n     */\n    //% blockId=loops_pause_async\n    //% block=\"pause (ms) %pause\" weight=54\n    //% shim=loops::pauseAsync\n    function pauseAsync(ms: number): void;\n}\n\n//% color=\"#2699d9\" icon=\"\\uf074\" block=\"Logic\"\ndeclare namespace logic {\n}\n\n//%\ndeclare class Vector {\n    //% blockId=vector_x\n    //% shim=.x property\n    x: number;\n    \n    //% shim=.toString\n    toString(): string;\n}\n\n//% blockNamespace=object\ndeclare interface Object3d {\n    /**\n     * Look at.\n     * @param position Vector\n     */\n    //% blockId=object3d_look_at\n    //% block=\"%object3d|look at %position=math_vector\"\n    //% shim=.lookAt\n    lookAt(position: Vector): void;\n    \n    /**\n     * Set object position.\n     * @param position Vector\n     */\n    //% blockId=object3d_set_position\n    //% block=\"set %object3d position|at %position=math_vector\"\n    //% shim=.setPosition\n    setPosition(position: Vector): void;\n\n    /**\n     * Set object rotation.\n     * @param rotation Vector\n     */\n    //% blockId=object3d_set_rotation\n    //% block=\"set %object3d rotation|to %rotation=math_unit_vector\"\n    //% shim=.setRotation\n    setRotation(rotation: Vector): void;\n\n    /**\n     * Set object scale.\n     * @param scale Vector\n     */\n    //% blockId=object3d_set_scale\n    //% block=\"set %object3d scale|to %scale=math_unit_vector\"\n    //% shim=.setScale\n    setScale(scale: Vector): void;\n\n    /**\n     * Rotate object by angle around axis.\n     * @param axis Vector\n     * @param angle number, eg: 0\n     */\n    //% blockId=object3d_set_rotation_from_axis_angle\n    //% block=\"set %object3d rotation|around %axis=math_vector|by %angle\"\n    //% shim=.setRotationFromAxisAngle\n    setRotationFromAxisAngle(axis: Vector, angle: number): void;\n\n    /**\n     * Enable/disable physics.\n     * @param enabled is physics, e.g. gravity, enabled on this object?\n     */\n    //% blockId=object3d_set_physics_enabled\n    //% block=\"set %object3d physics %enabled=fieldeditors_toggleOnOff\"\n    //% shim=.setPhysicsEnabled\n    setPhysicsEnabled(enabled: boolean): void;\n}\n\n//%\ndeclare class Color {\n}\n\n//%\ndeclare interface Shape3d {\n}\n\n//% color=\"#2680d9\" icon=\"\\uf1fc\" block=\"Design\" weight=100\ndeclare namespace design { /* paint-brush icon */\n}\n\ndeclare namespace design {\n    /**\n     * Standard color.\n     */\n    //% blockId=color_standard\n    //% block=\"%color\"\n    //% group=\"Color\"\n    //% shim=color::standardColor\n    function standardColor(rgb: Palette): Color;\n\n    /**\n     * Random color.\n     */\n    //% blockId=color_random\n    //% block=\"random color\"\n    //% group=\"Color\"\n    //% shim=color::randomColor\n    function randomColor(): Color;\n\n    /**\n     * Converts red, green, blue channels into a RGB color\n     * @param red value of the red channel between 0 and 255, eg: 255\n     * @param green value of the green channel between 0 and 255, eg: 255\n     * @param blue value of the blue channel between 0 and 255, eg: 255\n     */\n    //% blockId=color_from_rgb\n    //% block=\"red %red|green %green|blue %blue\"\n    //% red.min=0 red.max=255 green.min=0 green.max=255 blue.min=0 blue.max=255\n    //% group=\"Color\"\n    //% shim=color::colorFromRgb\n    function colorFromRgb(red: number, green: number, blue: number): Color;\n\n    /**\n     * Convert an HSV (hue, saturation, value) color to RGB\n     * @param hue value of the hue channel between 0 and 255, eg: 255\n     * @param sat value of the saturation channel between 0 and 255, eg: 255\n     * @param val value of the value channel between 0 and 255, eg: 255\n     */\n    //% blockId=color_from_hsv\n    //% block=\"hue %hue|sat %sat|val %val\"\n    //% hue.min=0 hue.max=255 sat.min=0 sat.max=255 val.min=0 val.max=255\n    //% group=\"Color\"\n    //% shim=color::colorFromHsv\n    function colorFromHsv(hue: number, sat: number, val: number): Color;\n\n    /**\n     * Pick color from slider.\n     * @param color color, eg: 0xffffff\n     */\n    //% blockId=color_wheel\n    //% block=\"%color\"\n    //% colorSecondary=\"#FFFFFF\"\n    //% color.fieldEditor=\"colorwheel\"\n    //% color.fieldOptions.decompileLiterals=true\n    //% blockHidden=true\n    //% shim=color::colorWheel\n    function colorWheel(color: number): Color;\n\n    /**\n     * Pick color from list.\n     * @param color color, eg: 0xffffff\n     */\n    //% blockId=color_picker\n    //% block=\"%color\"\n    //% colorSecondary=\"#FFFFFF\"\n    //% color.fieldEditor=\"colornumber\"\n    //% color.fieldOptions.decompileLiterals=true\n    //% blockHidden=true\n    //% shim=color::colorPicker\n    function colorPicker(color: number): Color;    \n}\n\ndeclare namespace design {\n    /**\n     * Plane shape.\n     * @param width number, eg: 100\n     * @param height number, eg: 100\n     */\n    //% blockId=shape3d_plane\n    //% block=\"plane of width %radius|height %height\"\n    //% group=\"Shape\"\n    //% shim=shape::planeShape\n    function planeShape(width?: number, height?: number): Shape3d;\n\n    /**\n     * Box shape.\n     * @param width number, eg: 1\n     * @param height number, eg: 1\n     * @param depth number, eg: 1\n     */\n    //% blockId=shape3d_box\n    //% block=\"box of width %width|height %height|depth %depth\"\n    //% group=\"Shape\"\n    //% shim=shape::boxShape\n    function boxShape(width?: number, height?: number, depth?: number): Shape3d;\n\n    /**\n     * Cylinder shape.\n     * @param radius number, eg: 0.5\n     * @param height number, eg: 1\n     */\n    //% blockId=shape3d_cylinder \n    //% block=\"cylinder of radius %radius|height %height\"\n    //% group=\"Shape\"\n    //% shim=shape::cylinderShape\n    function cylinderShape(radius?: number, height?: number): Shape3d;\n\n    /**\n     * Sphere shape.\n     * @param radius number, eg: 0.5\n     */\n    //% blockId=shape3d_sphere \n    //% block=\"sphere of radius %radius\"\n    //% group=\"Shape\"\n    //% shim=shape::sphereShape\n    function sphereShape(radius?: number): Shape3d;\n\n    /**\n     * Cone shape.\n     * @param radius number, eg: 0.5\n     * @param height number, eg: 1\n     */\n    //% blockId=shape3d_cone \n    //% block=\"cone of radius %radius|height %height\"\n    //% group=\"Shape\"\n    //% shim=shape::coneShape\n    function coneShape(radius?: number, height?: number): Shape3d;\n}\n\ndeclare namespace design {\n    /**\n     * Directional light.\n     * @param color Color\n     * @param intensity number, eg: 1\n     */\n    //% blockId=light_directional\n    //% block=\"%color=color_picker directional light|with intensity %intensity\"\n    //% group=\"Light\"\n    //% shim=light::directionalLight\n    function directionalLight(color?: Color, intensity?: number): Light;\n}\n\n//% blockNamespace=design\ndeclare interface Material {\n    //% blockCombine\n    //% blockCombineShadow=color_picker\n    //% group=\"Material\"\n    //% shim=.color property\n    color: Color;\n\n    //% blockCombine\n    //% blockCombineShadow=color_picker\n    //% group=\"Material\"\n    //% shim=.emissive property\n    emissive: Color;\n\n    //% blockCombine\n    //% group=\"Material\"\n    //% shim=.roughness property\n    roughness: number;\n\n    //% blockCombine\n    //% group=\"Material\"\n    //% shim=.metalness property\n    metalness: number;\n}\n\ndeclare namespace design {\n    /**\n     * Solid color material.\n     * @param color Color\n     */\n    //% blockId=material_of_color\n    //% block=\"%color=color_picker material\"\n    //% group=\"Material\"\n    //% shim=material::materialOfColor\n    function materialOfColor(color?: Color): Material;\n}\n\n//% color=\"#7f26d9\" icon=\"\\uf1b2\" block=\"Object\" weight=99\ndeclare namespace object { /* cube icon */\n    /**\n     * Create object with shape.\n     */\n    //% blockId=object3d_from_shape3d_and_material\n    //% block=\"object with shape %shape=shape3d_box|and material %material=material_with_color\"\n    //% shim=mesh::fromShapeAndMaterial\n    function fromShapeAndMaterial(shape3d: Shape3d, material: Material): Mesh3d;\n\n    /**\n     * \n     * Return material from the object, or null if it has none.\n     */\n    //% blockId=object3d_material_of\n    //% block=\"material of %object3d\"\n    //% shim=mesh::materialOf\n    function materialOf(object3d: Object3d): Material;\n}\n\n//%\ndeclare interface Light extends Object3d {\n}\n\n//%\ndeclare interface Camera extends Object3d {\n}\n\n//% color=\"#ffffff\" icon=\"\\uf030\" block=\"Camera\" weight=96\ndeclare namespace camera { /* camera icon */\n}\n\n//%\ndeclare interface Mesh3d extends Object3d {\n}\n\n//% blockNamespace=scene\ndeclare interface Scene3d extends Object3d {\n    /**\n     * Active camera.\n     */\n    //% blockId=scene_camera\n    //% shim=.camera property\n    camera: Camera;\n\n    /**\n     * Set background color.\n     * @param color Color\n     */\n    //% blockId=set_background_color\n    //% block=\"set %scene=world_scene|background %color=color_picker\"\n    //% shim=.setBackgroundColor\n    setBackgroundColor(color: Color): void;\n\n    /**\n     * Set ambient light color.\n     * @param color Color\n     */\n    //% blockId=set_ambientlight_color\n    //% block=\"set %scene=world_scene|ambient light %color=color_picker\"\n    //% shim=.setAmbientLight\n    setAmbientLight(color: Color): void;\n\n    /**\n     * Add object to scene.\n     */\n    //% blockId=add_object\n    //% block=\"add to %scene=world_scene %object3d|at %position=world_origin\"\n    //% shim=.add\n    add(object3d: Object3d, position: Vector): void;\n\n    /**\n     * Remove object from scene.\n     */\n    //% blockId=remove_object\n    //% block=\"remove from %scene=world_scene %object3d\"\n    //% shim=.remove\n    remove(object3d: Object3d): void;\n}\n\n//% color=\"#d92680\" icon=\"\\uf03e\" block=\"Scene\" weight=95\ndeclare namespace scene { /* image icon */\n    /**\n     * Origin.\n     */\n    //% blockId=scene_origin\n    //% block=\"scene origin\"\n    //% shim=scene::origin\n    function origin(): Vector;\n\n    /**\n     * Intersect the view of the current scene with the active camera.\n     */\n    //% blockId=scene_intersect_objectat\n    //% block=\"intersected object at %x|%y\"\n    //% shim=scene::intersectedObjectAt\n    function intersectedObjectAt(x: number, y: number): Object3d | null;\n\n    /**\n     * Code to run when the scene is animated before each frame.\n     */\n    //% blockId=scene_on_animate\n    //% block=\"on scene animate\"\n    //% shim=scene::onAnimate\n    function onAnimate(cb: (msec: number) => void): void;\n}\n\n//% color=\"#d92626\" icon=\"\\uf0ac\" block=\"World\" weight=94\ndeclare namespace world { /* globe icon */\n    /**\n     * Get current scene.\n     */\n    //% blockId=world_scene\n    //% block=\"scene\"\n    //% shim=world::scene\n    function scene(): Scene3d;\n}\n\n//% color=\"#B4009E\" icon=\"\\uf192\" block=\"Input\" weight=93\ndeclare namespace input { /* dot-circle icon */\n    /**\n     * Code to run when a mouse move occurs.\n     */\n    //% blockId=input_on_mousemove\n    //% block=\"on mouse move\"\n    //% shim=input::onMouseMove\n    function onMouseMove(cb: (x: number, y: number) => void): void;\n\n    /**\n     * Code to run when a mouse click occurs.\n     */\n    //% blockId=input_on_mouseclick\n    //% block=\"on mouse %button click\"\n    //% shim=input::onMouseClick\n    function onMouseClick(button: MouseButton, cb: (x: number, y: number) => void): void;\n}\n",
      "impetus.console.d.ts": "/*\n    MIT License\n\n    Copyright (c) 2018 MuddyTummy Software LLC\n*/\n\n//@ts-ignore\n//% color=\"#002050\" icon=\"\\uf120\" block=\"Console\" weight=0\n//% advanced=true\ndeclare namespace console {\n    /**\n     * Write a line of text to the console output.\n     * @param value to send\n     */\n    //% blockId=console_log\n    //% block=\"console|log %text\" weight=90\n    //% text.shadowOptions.toString=true\n    //% shim=console::log\n    function log(text: string): void;\n\n    /**\n     * Write a name:value pair as a line of text to the console output.\n     * @param name of the value, eg: \"x\"\n     * @param value to write\n     */\n    //% blockId=console_log_value\n    //% block=\"console|log value %name|= %value\" weight=88\n    //% value.shadowOptions.toString=true\n    //% shim=console::logValue\n    function logValue(name: string, value: string): void;\n}",
      "impetus.enums.d.ts": "/*\n    MIT License\n\n    Copyright (c) 2018 MuddyTummy Software LLC\n*/\n\n//%\ndeclare const enum MathOp {\n    //% block=\"+\"\n    Add = 1,\n    //% block=\"–\"\n    Subtract = 2,\n    \n    //% block=\"x\"\n    Multiply = 3,\n\n    //% block=\"÷\"\n    Divide = 4,\n}\n\n//%\ndeclare const enum MouseButton {\n    //% block=\"left button\"\n    Left = 1,\n\n    //% block=\"middle button\"\n    Middle = 2,\n\n    //% block=\"right button\"\n    Right = 3,\n}\n\n\n//%\ndeclare const enum SimplePalette {\n    //% block=\"red\"\n    Red = 0xff0000,\n\n    //% block=\"orange\"\n    Orange = 0xff7f00,\n\n    //% block=\"yellow\"\n    Yellow = 0xffff00,\n\n    //% block=\"green\"\n    Green = 0x00ff00,\n\n    //% block=\"blue\"\n    Blue = 0x0000ff,\n\n    //% block=\"indigo\"\n    Indigo = 0x4b0082,\n\n    //% block=\"violet\"\n    Violet = 0x8a2be2,\n\n    //% block=\"purple\"\n    Purple = 0xa033e5,\n\n    //% block=\"aquamarine\"\n    Pink = 0xff007f,\n\n    //% block=\"white\"\n    White = 0xffffff,\n\n    //% block=\"black\"\n    Black = 0x000000\n}\n\n//%\ndeclare const enum NaturePalette {\n    //% block=\"sky\"\n    Ground = 0xffc87f,\n\n    //% block=\"ground\"\n    Sky = 0x3284ff,\n}\n\n//%\ndeclare const enum Palette {\n    //% block=\"alice blue\"\n    AliceBlue = 0xf0f8ff,\n\n    //% block=\"antique white\"\n    AntiqueWhite = 0xfaebd7,\n\n    //% block=\"aqua\"\n    Aqua = 0x00ffff,\n\n    //% block=\"aquamarine\"\n    Aquamarine = 0x7fffd4,\n\n    //% block=\"azure\"\n    Aazure = 0xf0ffff,\n\n    //% block=\"beige\"\n    Beige = 0xf5f5dc,\n\n    //% block=\"bisque\"\n    Bisque = 0xffe4c4,\n\n    //% block=\"black\"\n    Black = 0x000000,\n\n    //% block=\"blanched almond\"\n    BlanchedAlmond = 0xffebcd,\n\n    //% block=\"Blue\"\n    Blue = 0x0000ff,\n\n    //% block=\"blue violet\"\n    BlueViolet = 0x8a2be2,\n\n    //% block=\"brown\"\n    Brown = 0xa52a2a,\n\n    //% block=\"burlywood\"\n    BurlyWood = 0xdeb887,\n\n    //% block=\"cadet blue\"\n    CadetBlue = 0x5f9ea0,\n\n    //% block=\"chartreuse\"\n    Chartreuse = 0x7fff00,\n\n    //% block=\"chocolate\"\n    Chocolate = 0xd2691e,\n\n    //% block=\"coral\"\n    Coral = 0xff7f50,\n\n    //% block=\"cornflower blue\"\n    CornflowerBlue = 0x6495ed,\n\n    //% block=\"cornsilk\"\n    Cornsilk = 0xfff8dc,\n\n    //% block=\"crimson\"\n    Crimson = 0xdc143c,\n\n    //% block=\"cyan\"\n    Cyan = 0x00ffff,\n\n    //% block=\"dark blue\"\n    DarkBlue = 0x00008b,\n\n    //% block=\"dark cyan\"\n    Darkcyan = 0x008b8b,\n\n    //% block=\"dark goldenrod\"\n    DarkGoldenrod = 0xb8860b,\n\n    //% block=\"dark gray\"\n    DarkGray = 0xa9a9a9,\n\n    //% block=\"dark green\"\n    DarkGreen = 0x006400,\n\n    //% block=\"dark khaki\"\n    DarkKhaki = 0xbdb76b,\n\n    //% block=\"dark magenta\"\n    DarkMagenta = 0x8b008b,\n\n    //% block=\"dark olive green\"\n    DarkOliveGreen = 0x556b2f,\n\n    //% block=\"dark orange\"\n    DarkoOrange = 0xff8c00,\n\n    //% block=\"dark orchid\"\n    DarkOrchid = 0x9932cc,\n\n    //% block=\"dark red\"\n    DarkRed = 0x8b0000,\n\n    //% block=\"dark salmon\"\n    DarkSalmon = 0xe9967a,\n\n    //% block=\"dark sea green\"\n    DarkSeaGreen = 0x8fbc8f,\n\n    //% block=\"dark slate blue\"\n    DarkSlateBlue = 0x483d8b,\n\n    //% block=\"dark slate gray\"\n    DarkSlateGray = 0x2f4f4f,\n\n    //% block=\"dark turquoise\"\n    DarkTurquoise = 0x00ced1,\n\n    //% block=\"dark violet\"\n    DarkViolet = 0x9400d3,\n\n    //% block=\"deep pink\"\n    DeepPink = 0xff1493,\n\n    //% block=\"deep sky blue\"\n    DeepSkyBlue = 0x00bfff,\n\n    //% block=\"dim gray\"\n    DimGray = 0x696969,\n\n    //% block=\"dodger blue\"\n    DodgerBlue = 0x1e90ff,\n\n    //% block=\"firebrick\"\n    Firebrick = 0xb22222,\n\n    //% block=\"floral white\"\n    FloralWhite = 0xfffaf0,\n\n    //% block=\"forest green\"\n    ForestGreen = 0x228b22,\n\n    //% block=\"fuchsia\"\n    Fuchsia = 0xff00ff,\n\n    //% block=\"gainsboro\"\n    Gainsboro = 0xdcdcdc,\n\n    //% block=\"ghost white\"\n    GhostWhite = 0xf8f8ff,\n\n    //% block=\"gold\"\n    Gold = 0xffd700,\n\n    //% block=\"goldenrod\"\n    Goldenrod = 0xdaa520,\n\n    //% block=\"gray\"\n    Gray = 0x808080,\n\n    //% block=\"green\"\n    Green = 0x008000,\n\n    //% block=\"honeydew\"\n    Honeydew = 0xf0fff0,\n\n    //% block=\"hot pink\"\n    HotPink = 0xff69b4,\n\n    //% block=\"indian red\"\n    IndianRed = 0xcd5c5c,\n\n    //% block=\"indigo\"\n    Indigo = 0x4b0082,\n\n    //% block=\"ivory\"\n    Ivory = 0xfffff0,\n\n    //% block=\"khaki\"\n    Khaki = 0xf0e68c,\n\n    //% block=\"lavender\"\n    Lavender = 0xe6e6fa,\n\n    //% block=\"lavender blush\"\n    LavenderBlush = 0xfff0f5,\n\n    //% block=\"lawn green\"\n    LawnGreen = 0x7cfc00,\n\n    //% block=\"lemon chiffon\"\n    LemonChiffon = 0xfffacd,\n\n    //% block=\"light blue\"\n    LightBlue = 0xadd8e6,\n\n    //% block=\"light coral\"\n    LightCoral = 0xf08080,\n\n    //% block=\"light cyan\"\n    LightCyan = 0xe0ffff,\n\n    //% block=\"light goldenrod\"\n    LightGoldenrod = 0xfafad2,\n\n    //% block=\"light gray\"\n    LightGray = 0xd3d3d3,\n\n    //% block=\"aquamarine\"\n    LightGreen = 0x90ee90,\n\n    //% block=\"light pink\"\n    LighPink = 0xffb6c1,\n\n    //% block=\"light salmon\"\n    LightSalmon = 0xffa07a,\n\n    //% block=\"light sea green\"\n    LightSeaGreen = 0x20b2aa,\n\n    //% block=\"light sky blue\"\n    LightSkyBlue = 0x87cefa,\n\n    //% block=\"light slate gray\"\n    LightSlateGray = 0x778899,\n\n    //% block=\"light steel blue\"\n    LightSteelBlue = 0xb0c4de,\n\n    //% block=\"light yellow\"\n    LightYellow = 0xffffe0,\n\n    //% block=\"lime\"\n    Lime = 0x00ff00,\n\n    //% block=\"lime green\"\n    Limegreen = 0x32cd32,\n\n    //% block=\"linen\"\n    Linen = 0xfaf0e6,\n\n    //% block=\"magenta\"\n    Magenta = 0xff00ff,\n\n    //% block=\"maroon\"\n    Maroon = 0x800000,\n\n    //% block=\"medium aquamarine\"\n    MediumAquamarine = 0x66cdaa,\n\n    //% block=\"medium blue\"\n    MediumBlue = 0x0000cd,\n\n    //% block=\"medium orchid\"\n    MediumOrchid = 0xba55d3,\n\n    //% block=\"medium purple\"\n    MediumPurple = 0x9370db,\n\n    //% block=\"medium sea green\"\n    MediumSeaGreen = 0x3cb371,\n\n    //% block=\"medium slate blue\"\n    MediumSlateBlue = 0x7b68ee,\n\n    //% block=\"medium spring green\"\n    MediumSpringGreen = 0x00fa9a,\n\n    //% block=\"medium turquoise\"\n    MediumTurquoise = 0x48d1cc,\n\n    //% block=\"medium violet red\"\n    MediumVioletRed = 0xc71585,\n\n    //% block=\"midnight blue\"\n    MidnightBlue = 0x191970,\n\n    //% block=\"mint cream\"\n    MintCream = 0xf5fffa,\n\n    //% block=\"misty rose\"\n    MistyRose = 0xffe4e1,\n\n    //% block=\"moccasin\"\n    Moccasin = 0xffe4b5,\n\n    //% block=\"navajo white\"\n    NavajoWhite = 0xffdead,\n\n    //% block=\"navy\"\n    Navy = 0x000080,\n\n    //% block=\"oldlace\"\n    Oldlace = 0xfdf5e6,\n\n    //% block=\"olive\"\n    Olive = 0x808000,\n\n    //% block=\"olivedrab\"\n    Olivedrab = 0x6b8e23,\n\n    //% block=\"orange\"\n    Orange = 0xffa500,\n\n    //% block=\"orange red\"\n    OrangeRed = 0xff4500,\n\n    //% block=\"orchid\"\n    Orchid = 0xda70d6,\n\n    //% block=\"pale goldenrod\"\n    PaleGoldenrod = 0xeee8aa,\n\n    //% block=\"pale green\"\n    PaleGreen = 0x98fb98,\n\n    //% block=\"pale turquoise\"\n    PaleTurquoise = 0xafeeee,\n\n    //% block=\"pale violet red\"\n    PaleVioletRed = 0xdb7093,\n\n    //% block=\"papayawhip\"\n    Papayawhip = 0xffefd5,\n\n    //% block=\"peach puff\"\n    PeachPuff = 0xffdab9,\n\n    //% block=\"peru\"\n    Peru = 0xcd853f,\n\n    //% block=\"pink\"\n    Pink = 0xffc0cb,\n\n    //% block=\"plum\"\n    Plum = 0xdda0dd,\n\n    //% block=\"powder blue\"\n    PowderBlue = 0xb0e0e6,\n\n    //% block=\"purple\"\n    Purple = 0x800080,\n\n    //% block=\"rebecca purple\"\n    RebeccaPurple = 0x663399,\n\n    //% block=\"red\"\n    Red = 0xff0000,\n\n    //% block=\"rosy brown\"\n    RosyBrown = 0xbc8f8f,\n\n    //% block=\"royal blue\"\n    RoyalBlue = 0x4169e1,\n\n    //% block=\"saddle brown\"\n    SaddleBrown = 0x8b4513,\n\n    //% block=\"salmon\"\n    Salmon = 0xfa8072,\n\n    //% block=\"sandy brown\"\n    SandyBrown = 0xf4a460,\n\n    //% block=\"sea green\"\n    SeaGreen = 0x2e8b57,\n\n    //% block=\"seashell\"\n    Seashell = 0xfff5ee,\n\n    //% block=\"sienna\"\n    Sienna = 0xa0522d,\n\n    //% block=\"silver\"\n    Silver = 0xc0c0c0,\n\n    //% block=\"sky blue\"\n    SkyBlue = 0x87ceeb,\n\n    //% block=\"slate blue\"\n    SlateBlue = 0x6a5acd,\n\n    //% block=\"slate gray\"\n    SlateGray = 0x708090,\n\n    //% block=\"snow\"\n    Snow = 0xfffafa,\n\n    //% block=\"soft white\"\n    SoftWhite = 0x404040,\n\n    //% block=\"spring green\"\n    SpringGreen = 0x00ff7f,\n\n    //% block=\"steel blue\"\n    SteelBlue = 0x4682b4,\n\n    //% block=\"tan\"\n    Tan = 0xd2b48c,\n\n    //% block=\"teal\"\n    Teal = 0x008080,\n\n    //% block=\"thistle\"\n    Thistle = 0xd8bfd8,\n\n    //% block=\"tomato\"\n    Tomato = 0xff6347,\n\n    //% block=\"turquoise\"\n    Turquoise = 0x40e0d0,\n\n    //% block=\"violet\"\n    Violet = 0xee82ee,\n\n    //% block=\"wheat\"\n    Wheat = 0xf5deb3,\n\n    //% block=\"white\"\n    White = 0xffffff,\n\n    //% block=\"whitesmoke\"\n    Whitesmoke = 0xf5f5f5,\n\n    //% block=\"yellow\"\n    Yellow = 0xffff00,\n\n    //% block=\"yellow green\"\n    YellowGreen = 0x9acd32,\n}\n\n",
      "impetus.math.d.ts": "/*\n    MIT License\n\n    Copyright (c) 2018 MuddyTummy Software LLC\n*/\n\n//@ts-ignore\ndeclare namespace Math {\n    /**\n     * Create vector.\n     * @param x value, eg: 0\n     * @param y value, eg: 0\n     * @param z value, eg: 0\n     */\n    //% blockId=math_vector\n    //% block=\"X %x|Y %y|Z %z\"\n    //% group=\"Vector\"\n    //% shim=math3d::vector\n    function vector(x?: number, y?: number, z?: number): Vector;\n\n    /**\n     * Zero vector.\n     */\n    //% blockId=math_zero_vector\n    //% block=\"zero vector\"\n    //% group=\"Vector\"\n    //% shim=math3d::zeroVector\n    function zeroVector(): Vector;\n\n    /**\n     * Unit vector.\n     */\n    //% blockId=math_unit_vector\n    //% block=\"unit vector\"\n    //% group=\"Vector\"\n    //% shim=math3d::unitVector\n    function unitVector(): Vector;\n\n    /**\n     * Vector operations.\n     * @param a vector operand\n     * @param op vector operation\n     * @param b vector operand\n     */\n    //% blockId=math_vector_op\n    //% block=\"%a=math_unit_vector|%op|%b=math_unit_vector\"\n    //% group=\"Vector\"\n    //% shim=math3d::vectorOp\n    function vectorOp(a: Vector, op: MathOp, b: Vector): Vector;\n\n    /**\n     * Vector scalar operations.\n     * @param a vector operand\n     * @param op scalar operation\n     * @param s scalar operand, eg: 0\n     */\n    //% blockId=math_vector_scalar_op\n    //% block=\"%a=math_unit_vector|%op|scalar %s\"\n    //% group=\"Vector\"\n    //% shim=math3d::vectorScalarOp\n    function vectorScalarOp(a: Vector, op: MathOp, s: number): Vector;\n\n    /**\n     * Convert degress to radians.\n     * @param degrees number, e.g. 0\n     */\n    //% blockId=math_deg_to_rad\n    //% block=\"%degrees degrees in radians\"\n    //% shim=math::degreesInRadians\n    //% advanced=true\n    function degreesInRadians(degrees: number): number;\n\n    /**\n     * Convert radians to degrees.\n     * @param radians number, e.g. 0\n     */\n    //% blockId=math_rad_to_deg\n    //% block=\"%radians radians in degrees\"\n    //% shim=math::radiansInDegrees\n    //% advanced=true\n    function radiansInDegrees(radians: number): number;\n}",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockGap=64\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * joins all elements of an array into a string and returns this string.\n      * @param sep the string separator\n      */\n    //% helper=arrayJoin weight=40\n    join(sep: string): string;\n    \n    /**\n      * Tests whether at least one element in the array passes the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arraySome weight=40\n    some(callbackfn: (value: T, index: number) => boolean): boolean;\n\n    /**\n      * Tests whether all elements in the array pass the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayEvery weight=40\n    every(callbackfn: (value: T, index: number) => boolean): boolean;\n    \n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Call a defined callback function on each element of an array.\n      * @param callbackfn A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayForEach weight=40\n    forEach(callbackfn: (value: T, index: number) => void): void;\n    \n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=15\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    export function arrayJoin<T>(arr: T[], sep: string): string {\n        let r = \"\";\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            if (i > 0 && sep)\n                r += sep;\n            r += arr[i] || \"\";\n        }\n        return r;\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arraySome<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (callbackfn(arr[i], i))\n                return true;\n        return false;\n    }\n\n    export function arrayEvery<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (!callbackfn(arr[i], i))\n                return false;\n        return true;\n    }\n\n    export function arrayForEach<T>(arr: T[], callbackfn: (value: T, index: number) => void): void {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            callbackfn(arr[i], i);\n        }\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n}\n",
      "pxt.json": "{\n  \"name\": \"core\",\n  \"description\": \"An Impetus target for PXT\",\n  \"files\": [\n    \"README.md\",\n    \"pxt-core.d.ts\",\n    \"pxt-helpers.ts\",\n    \"impetus.enums.d.ts\",\n    \"impetus.console.d.ts\",\n    \"impetus.math.d.ts\",\n    \"impetus.api.d.ts\",\n    \"sims.d.ts\"\n  ],\n  \"public\": true,\n  \"dependencies\": {}\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\n// Auto-generated. Do not edit. Really.\n"
    }
  },
  "versions": {
    "target": "0.1.0",
    "pxt": "3.8.8"
  }
}
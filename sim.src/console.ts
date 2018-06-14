/*
    MIT License

    Copyright (c) 2018 MuddyTummy Software LLC

    OSS: Derived from https://github.com/Microsoft/pxt-common-packages.
*/

namespace pxsim.serial {
    function writeString(text: string) {
        debug.log(text);

        if (pxsim.runtime && pxsim.runtime.board) {
            pxsim.runtime.board.writeSerial(text);
        }
    }

    export function writeLine(text: string) {
        writeString(`${text}\r\n`);
    }

    export function writeValue(name: string, value: string) {
        writeLine(`${name ? name + ':' : ''}${value}`);
    }
}

namespace pxsim.console {
    export function log(text: string) {
        serial.writeLine(text);
    }

    export function logValue(name: string, value: string) {
        serial.writeValue(name, value);
    }
}
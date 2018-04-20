/*
    MIT License

    Copyright (c) 2018 MuddyTummy Software LLC
*/

namespace pxsim.input {
    export function onMouseEnter(handler: RefAction) {
        singletonWorldBoard().events!.listen(ScopeId.MouseDevice, EventId.Enter, handler);
    }

    export function onMouseMove(handler: RefAction) {
        singletonWorldBoard().events!.listen(ScopeId.MouseDevice, EventId.Move, handler);
    }

    export function onMouseLeave(handler: RefAction) {
        singletonWorldBoard().events!.listen(ScopeId.MouseDevice, EventId.Leave, handler);
    }

    export function onMouseClick(button: MouseButton, handler: RefAction) {
        let sid;

        switch (button) {
            case MouseButton.Left:
                sid = ScopeId.MouseLeftButton;
                break;

            case MouseButton.Middle:
                sid = ScopeId.MouseMiddleButton;
                break;

            case MouseButton.Right:
                sid = ScopeId.MouseRightButton;
                break;

            default:
                return;
        }

        singletonWorldBoard().events!.listen(sid, EventId.Click, handler);
    }
}
import{jsx as _jsx}from"react/jsx-runtime";import{BUTTONS,EVENTS}from"./consts.js";export function navigate(href){window.history.pushState({},"",href);const navigateEvent=new Event(EVENTS.PUSH_STATE);window.dispatchEvent(navigateEvent)}export function Link({target,to,...props}){const handleClick=event=>{const isMainEvent=event.button===BUTTONS.PRIMARY;const isModifiedEvent=event.metaKey||event.altKey||event.ctrlKey||event.shiftKey;const isManageableEvent=target===undefined||target==="_self";if(isMainEvent&&isManageableEvent&&!isModifiedEvent){event.preventDefault();navigate(to)}};return _jsx("a",{onClick:handleClick,href:to,target:target,...props})}
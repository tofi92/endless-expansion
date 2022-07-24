export default function useTouch(swipeLeft?: () => void, swipeRight?: () => void, swipeUp?: () => void, swipeDown?: () => void, threshold = 100) {
    let touchstartX = 0
    let touchendX = 0
    let touchstartY = 0;
    let touchendY = 0;

    function checkDirection() {
        if (touchendX + threshold < touchstartX && swipeLeft) swipeLeft();
        if (touchendX + threshold > touchstartX && swipeRight) swipeRight();
        if (touchendY + threshold < touchstartY && swipeUp) swipeUp();
        if (touchendY > touchstartY + threshold && swipeDown) swipeDown();
    }

    function touchStart(e: TouchEvent) {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    }

    function touchEnd(e: TouchEvent) {
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        checkDirection()
    }

    onMounted(() => {
        window.addEventListener('touchstart', touchStart);
        window.addEventListener('touchend', touchEnd);
    });

    onUnmounted(() => {
        window.removeEventListener("touchstart", touchStart);
        window.removeEventListener('touchend', touchEnd);
    });

    return {

    }


}
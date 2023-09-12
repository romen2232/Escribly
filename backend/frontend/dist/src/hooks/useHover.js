import { useState, useEffect, useRef } from 'react';
const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);
    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [ref, handleMouseOver, handleMouseOut]);
    return { ref, isHovered };
};
export default useHover;

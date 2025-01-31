declare module 'react-typewriter-effect' {
    import React from 'react';

    interface TypewriterProps {
        textStyle?: React.CSSProperties;
        startDelay?: number;
        cursorColor?: string;
        multiText?: string[];
        multiTextDelay?: number;
        typeSpeed?: number;
        deleteSpeed?: number;
        multiTextLoop?: boolean;
    }

    const Typewriter: React.FC<TypewriterProps>;

    export default Typewriter;
}

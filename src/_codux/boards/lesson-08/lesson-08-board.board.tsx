import { createBoard } from '@wixc3/react-board';
import { Lesson08 } from '../../../components/lessons/08/lesson-08';

export default createBoard({
    name: '08 Flex Layout',
    Board: () => <Lesson08 />,
    environmentProps: {
        windowWidth: 840,
        windowHeight: 630,
        canvasMargin: {
            top: 0,
            left: 0,
        },
    },
});

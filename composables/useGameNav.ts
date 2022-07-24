import Link from '../types/link';
export default function useGameNav() {
    const links: Link[] = [
        {
            caption: 'links.game.overview',
            to: '/game'
        },
        {
            caption: 'links.game.systems',
            to: '/game/systems'
        },
        {
            caption: 'links.game.research',
            to: '/game/research'
        }
    ]

    return {
        links
    }
}
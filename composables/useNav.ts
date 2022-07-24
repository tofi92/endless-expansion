import Link from '@/types/link';
export default function useNav() {
    const links: Link[] = [
        {
            caption: 'links.home',
            to: '/'
        },
        {
            caption: 'links.wiki',
            to: '/wiki'
        },
        {
            caption: 'links.playnow',
            to: '/game'
        }
    ]

    return {
        links
    }
}
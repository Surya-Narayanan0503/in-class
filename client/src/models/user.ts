export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    
}

export const list: User[] = [
    {
        firstName: 'John',
        lastName: 'DOe',
        handle: '@johndoe',
        password: 'password',
        email: 'john@doe.com',
        pic: 'https://randomuser.me/api/portraits/men/3.jpg',
        id:1,
    },

    {
        firstName: 'Vladimir',
        lastName: 'Putin',
        handle: '@russian_dictator',
        password: 'long table',
        email: 'john@doe.com',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id:1,
    },

    {
        firstName: 'Kamala',
        lastName: 'Harris',
        handle: '@vp',
        password: 'password',
        email: 'kamala@whitehouse.org',
        pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        id:1,
    }
]
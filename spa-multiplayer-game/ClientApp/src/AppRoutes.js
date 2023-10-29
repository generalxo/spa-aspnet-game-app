import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Game from './components/Game';
import { Home } from './components/Home';
import ProfilePage from './components/ProfilePage';
import HighScorePage from './components/HighScorePage';

const AppRoutes = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: '/game',
        element: <Game />,
    },
    {
        path: '/highscorepage',
        element: <HighScorePage />,
    },
    {
        path: '/profilePage',
        element: <ProfilePage />,
    },
    ...ApiAuthorzationRoutes,
];

export default AppRoutes;

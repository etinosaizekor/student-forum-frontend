import styled from 'styled-components';
import { SvgIcon } from '@mui/material';

import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import HomeIcon from '@mui/icons-material/Home';

const ColoredIcon = styled(SvgIcon)`
  color: #6c757d;
`;

export const SidebarData = [
    {
        'linkText': 'Home',
        'path': "/home",
        'icon': <ColoredIcon><HomeIcon/></ColoredIcon>
    },
    {
        'linkText': 'My questions',
        'path': "/questions",
        'icon': <ColoredIcon><QuestionAnswerRoundedIcon/></ColoredIcon>
    },
    {
        'linkText': 'Categories',
        'path': "/categories",
        'icon': <ColoredIcon><ListAltRoundedIcon/></ColoredIcon>

    },
    {
        'linkText': 'Users',
        'path': "/user",
        'icon': <ColoredIcon><PersonRoundedIcon/></ColoredIcon>
    },
    {
        'linkText': 'Ask Question',
        'path': "/newPost",
        'icon': <ColoredIcon><AddRoundedIcon/></ColoredIcon>
    },
    {
        'linkText': 'Full post',
        'path': "post",
        'icon': <ColoredIcon><AddRoundedIcon/></ColoredIcon>
    }
]
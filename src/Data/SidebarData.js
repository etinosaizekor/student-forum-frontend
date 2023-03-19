import styled from 'styled-components';
import { SvgIcon } from '@mui/material';

import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
const ColoredIcon = styled(SvgIcon)`
  color: gray;
`;

export const SidebarData = [
    {
        'linkText': 'Questions',
        'path': "/posts",
        'icon': <ColoredIcon><QuestionAnswerRoundedIcon/></ColoredIcon>
    },
    {
        'linkText': 'Categories',
        'path': "/categories",
        'icon': <ColoredIcon><ListAltRoundedIcon/></ColoredIcon>

    },
    {
        'linkText': 'Groups',
        'path': "#",
        'icon': <ColoredIcon><GroupsRoundedIcon/></ColoredIcon>
    },
    {
        'linkText': 'Users',
        'path': "/user",
        'icon': <ColoredIcon><PersonRoundedIcon/></ColoredIcon>
    },
    {
        'linkText': 'Create Post',
        'path': "/newPost",
        'icon': <ColoredIcon><AddRoundedIcon/></ColoredIcon>
    }
]
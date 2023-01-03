import navigationSVG from '@plone/volto/icons/navigation.svg';
import View from './View';
import Edit from './Edit';


const applyConfig = (config) => {
  config.blocks.blocksConfig.youvisit = {
    id: 'youvisit',
    title: 'YouVisit',
    icon: navigationSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;


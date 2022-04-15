import plugin from 'js-plugin';

import JobView from './JobView.jsx';

const componentName = "TaskJournal";
const userType = "owner";

const componentPlugin = {
  name: "owner_task_view",
  component: componentName,
  [componentName]: {
    [userType]: {
      processInit: (props) => {
        return (<JobView {...props} />)
      },
    }
  }
};

plugin.register(componentPlugin);

export { componentName, userType, componentPlugin };

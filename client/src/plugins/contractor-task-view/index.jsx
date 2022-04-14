import plugin from 'js-plugin';

import JobManager from './JobManager.jsx';

const componentName = "TaskJournal";
const userType = "contractor";

const componentPlugin = {
  name: "contractor_task_view",
  component: componentName,
  [componentName]: {
    [userType]: {
      processInit: (props) => {
        return (<JobManager {...props} />)
      },
    }
  }
};

plugin.register(componentPlugin);

export { componentName, userType, componentPlugin };

import { lazy, Suspense } from 'react';
import plugin from 'js-plugin';

// import JobView from './JobView.jsx';
const JobView = lazy(() => import('./JobView.jsx'));

const componentName = "TaskJournal";
const userType = "owner";

const componentPlugin = {
  name: "owner_task_view",
  component: componentName,
  [componentName]: {
    [userType]: {
      processInit: (props) => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <JobView {...props} />
          </Suspense>
        ); 
      },
    }
  }
};

plugin.register(componentPlugin);

export { componentName, userType, componentPlugin };

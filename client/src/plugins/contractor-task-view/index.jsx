import { lazy, Suspense } from 'react';
import plugin from 'js-plugin';

// import JobManager from './JobManager.jsx';
const JobManager = lazy(() => import('./JobManager.jsx'));

const componentName = "TaskJournal";
const userType = "contractor";

const componentPlugin = {
  name: "contractor_task_view",
  component: componentName,
  [componentName]: {
    [userType]: {
      processInit: (props) => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <JobManager {...props} />
          </Suspense>
        );
      },
    }
  }
};

plugin.register(componentPlugin);

export { componentName, userType, componentPlugin };

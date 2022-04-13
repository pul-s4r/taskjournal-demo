import plugin from 'js-plugin';

import JobManager from './JobManager.jsx';

plugin.register({
  name: "contractor_task_view",
  component: {
    processInitContractorView: (props) => {
      return (<JobManager {...props} />)
    },
  }
});

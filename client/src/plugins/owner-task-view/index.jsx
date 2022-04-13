import plugin from 'js-plugin';

import JobView from './JobView.jsx';

plugin.register({
  name: "owner_task_view",
  component: {
    processInitOwnerView: (props) => {
      return (<JobView {...props} />)
    },
  }
});

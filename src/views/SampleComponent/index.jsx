import SampleForm from '../../form/SampleForm';
import SampleButtons from './SampleButtons';
import SampleLinks from './SampleLinks';
import SampleInputs from './SampleInputs';
function Components() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Sample Components</h1>
      <div style={{ margin: '1em' }}>
        <SampleButtons />
        <SampleInputs />
        <SampleLinks />
        <SampleForm />
      </div>
    </>
  );
}

export default Components;

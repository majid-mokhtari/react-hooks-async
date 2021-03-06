import * as React from 'react';

import DisplayRemoteData from './DisplayRemoteData';

const {
  useState,
  // @ts-ignore
  unstable_ConcurrentMode: ConcurrentMode,
} = React;

const App = () => {
  const [id, setId] = useState(1);
  return (
    <ConcurrentMode>
      <div>
        id:{id}
        <button type="button" onClick={() => setId(id + 1)}>Next</button>
        <button type="button" onClick={() => setId(id - 1)}>Previous</button>
        <DisplayRemoteData id={String(id)} />
      </div>
    </ConcurrentMode>
  );
};

export default App;

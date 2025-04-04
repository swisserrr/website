import React from 'react';

import PepsicoSurvey from 'containers/PepsicoSurvey';

function Target() {
  return (
    <PepsicoSurvey
      heading="Target"
      noOfElderOptedText="Number of elders enrolled under the program"
      url="admin/website/target-leads"
    />
  );
}

export default Target;

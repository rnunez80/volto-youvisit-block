import React, {useState, useEffect} from 'react';
import './theme/block.less';

const View = ({data, isEditMode, className}) => {
  const [value, setValue] = useState('');
  const Tour = "https://cdn.youvisit.com/tour/Embed/immersiveIcon?v=2022.14.5&ab=&inst=" + data.tourID + "&loc=&pl=v&index=0&debug=&titleshow=&module=&&_sp=undefined&inst=" + data.tourID + "&loc=&pl=v&index=0&debug=&titleshow=&module=&&_sp=undefined&pl=v&uiclass=&hover=1";
  useEffect(() => {
    // This function will run whenever the `data` prop updates
    function reloadTour() {
      // Remove the existing script element from the DOM, if it exists
      const existingScript = document.querySelector('script[src="//www.youvisit.com/tour/Embed/js2"]');
      if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
      }

      // Create a new script element
      const script = document.createElement('script');
      // Set the script src to the YouVisit URL
      script.src = '//www.youvisit.com/tour/Embed/js2';
      // Add the script to the DOM
      document.body.appendChild(script);
    }

    reloadTour();
  }, [data]);

  return (
    <div>
      <iframe scrolling="no" title="Virtual Reality, Virtual Tour" alt="Virtual Reality, Virtual Tour"
              className="youvisit-embed" id="virtualtour_iframe_0"
              src={Tour}
              style={{
                width: '100%',
                maxWidth: '100vw',
                outline: 'none',
                border: 'none',
                height: data.tourHeight,
              }}>
      </iframe>
    </div>
  )
    ;
}

export default View;






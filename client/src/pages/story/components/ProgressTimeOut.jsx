ProgressTimeOut.propTypes = {};

function ProgressTimeOut({ storyViewer, showStoryIndex, pauseFlagMouse }) {
  return (
    <ul className='storyProgessList'>
      {Array.from(new Array(storyViewer.length)).map((x, index) => (
        <li key={index} className='storyProgessItem'>
          <div className='storyProgessItemProgress'></div>
        </li>
      ))}
    </ul>
  );
}

export default ProgressTimeOut;

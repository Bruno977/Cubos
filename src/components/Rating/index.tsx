import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressCircular, ProgressText } from './style';

export function Rating({ average }: { average: number }) {
  return (
    <ProgressCircular>
      <CircularProgressbarWithChildren
        value={(average / 10) * 100}
        strokeWidth={7}
      >
        <ProgressText>
          <strong>
            {((average / 10) * 100).toFixed(0)}
            <span> %</span>
          </strong>
        </ProgressText>
      </CircularProgressbarWithChildren>
    </ProgressCircular>
  );
}

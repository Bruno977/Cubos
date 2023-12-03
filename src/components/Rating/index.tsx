import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  ContainerRating,
  ProgressCircular,
  ProgressText,
  RatingProgress,
  RatingShadow,
} from './style';
import { EllipseShadow } from '../../assets/icons/EllipseShadow';

export function Rating({ average }: { average: number }) {
  return (
    <ContainerRating>
      <RatingProgress>
        {/* <Rating average={movie.vote_average} /> */}
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
      </RatingProgress>
      <RatingShadow>
        <EllipseShadow />
      </RatingShadow>
    </ContainerRating>
  );
}

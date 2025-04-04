import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineHeading, TimelineSubHeading } from './styles';
import { Highfive, Creative, Instructor, Rupee } from '../../../public/static/images/index';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
const HomePageImage = dynamic(() => import('components/HomePageImage'));
export default function BasicTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
            <Box
              sx={{
                height: 52,
                width: 52,
                maxHeight: { xs: 40, md: 167 },
                maxWidth: { xs: 40, md: 250 },
              }}
            />
            <HomePageImage src={Highfive} height="100%" width="100%" />
          </TimelineDot>
          <TimelineConnector style={{ background: 'black' }} />
        </TimelineSeparator>
        <TimelineContent style={{ marginBottom: '20px' }}>
          <TimelineHeading>{'Welcome and Orientation:'}</TimelineHeading>
          <TimelineSubHeading>
            Welcome kit includes essential documents such as contracts, partnership agreements, any legal or financial
            documents along with branded marketing material.
          </TimelineSubHeading>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem background="transparent">
        <TimelineSeparator>
          <TimelineDot style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
            <Box
              sx={{
                height: 52,
                width: 52,
                maxHeight: { xs: 40, md: 167 },
                maxWidth: { xs: 40, md: 250 },
              }}
              alt="Creative."
            />
            <HomePageImage src={Creative} height="100%" width="100%" />
          </TimelineDot>
          <TimelineConnector style={{ background: 'black' }} />
        </TimelineSeparator>
        <TimelineContent style={{ marginBottom: '20px' }}>
          <TimelineHeading>{'Brand/Culture immersion and Values:'}</TimelineHeading>
          <TimelineSubHeading>
            {` Detailed brand presentation, including the company's mission, vision and values, branding guidelines, logos
            and brand messaging, including an office tour. `}
          </TimelineSubHeading>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
            <Box
              sx={{
                height: 52,
                width: 52,
                maxHeight: { xs: 40, md: 167 },
                maxWidth: { xs: 40, md: 250 },
              }}
            />
            <HomePageImage src={Rupee} height="100%" width="100%" />
          </TimelineDot>
          <TimelineConnector style={{ background: 'black' }} />
        </TimelineSeparator>
        <TimelineContent style={{ marginBottom: '20px' }}>
          <TimelineHeading>{'Financial Model and Cash Flow Methodology:'}</TimelineHeading>
          <TimelineSubHeading>
            {`Provide the training on the different financial and operational models. Clarify financial arrangements,
            including profit-sharing, and capital contributions. `}
          </TimelineSubHeading>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
            <Box
              sx={{
                height: 52,
                width: 52,
                maxHeight: { xs: 40, md: 167 },
                maxWidth: { xs: 40, md: 250 },
              }}
            />
            <HomePageImage src={Instructor} height="100%" width="100%" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent style={{ marginBottom: '20px' }}>
          <TimelineHeading>{'Product/Service Training:'}</TimelineHeading>
          <TimelineSubHeading>
            {`Conduct an orientation program that includes in-depth training on the company's products, services and
            industry and provide access to training materials.`}
          </TimelineSubHeading>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

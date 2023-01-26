import { ReactNode } from 'react';
import { RegularText } from '../../../../components/Typography';
import { SectionTitleContainer } from './styles';

interface SectionTitleProps {
  title: string;
  icon: ReactNode;
  subtitle: string;
}

export function SectionTitle({title, icon, subtitle}: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color='subtitle'>
          {title}
        </RegularText>
        <RegularText size='s'>
          {subtitle}
        </RegularText>
      </div>
    </SectionTitleContainer>
  );
}

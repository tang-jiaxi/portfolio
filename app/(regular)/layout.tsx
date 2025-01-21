import '../globals.css'; 
import ResponsiveMatterWrapper from '@/components/ResponsiveMatterWrapper';

interface RegularLayoutProps {
  children: React.ReactNode;
}

export default function CasestudyLayout({ children }: RegularLayoutProps) {
    
  return (
    <>
      {children}
      <ResponsiveMatterWrapper isHeader={false}/>
    </>
  )
}
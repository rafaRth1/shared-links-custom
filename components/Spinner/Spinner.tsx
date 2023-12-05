import './Spinner.css';

interface Props {
	className?: string;
	width?: string;
	height?: string;
}

export const Spinner = ({ className, width = '60', height = '60' }: Props) => {
	return (
		<div className={`flex justify-center items-center ${className}`}>
			<span
				className='loader block'
				style={{ width: `${width}px`, height: `${height}px` }}></span>
		</div>
	);
};

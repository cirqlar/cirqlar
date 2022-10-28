import Image from "next/image";

interface BgImageProps extends $ElementProps<typeof Image> {
    children: React.ReactNode
}

const BgImage = ({ children, ...props}: BgImageProps) => {
    return (
        <>
            <div className="absolute inset-0">
                <Image {...props} alt={props.alt} />
            </div>
            <div className="absolute inset-0 bg-black/[.45]" />
            <div className="relative">
                {children}
            </div>
        </>
    )
}

export default BgImage;

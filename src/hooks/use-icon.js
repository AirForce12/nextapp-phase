import { useEffect, useRef, useState } from "react";

function useDynamicIconImport(name, options = {}) {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);
    // subhan code
    const [resIcon, setresIcon] = useState("");

    const [error, setError] = useState();

    const { onError } = options;

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                const loadIcon = await import(`react-feather`);
                const resIcon = await loadIcon[name];
                ImportedIconRef.current = resIcon;
                // subhan code
                setresIcon(resIcon);

                if (!ImportedIconRef.current) {
                    const { default: namedImport } = await import(
                        `../assets/fonts/${name}.svg`
                    );
                    ImportedIconRef.current = namedImport;
                }
            } catch (err) {
                if (onError) {
                    onError(err);
                }
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, error]);

    return { error, loading, SvgIcon: resIcon };
}

export default useDynamicIconImport;

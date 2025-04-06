import '../styles/asideNavBar.css'
import { Children, useState, useRef, useEffect} from 'react';

function ObservedComponent({ callBackFunction, children, id }) {
    const myRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                callBackFunction();
            }
        }, {
            threshold: 1,
            rootMargin: '1px'
        })
        observer.observe(myRef.current);
        return () => { observer.disconnect(); };
    }, [myRef]);

    return (
        <div ref={myRef} id={id}>
            {children}
        </div>
    )
}

// The children component needs a unique 'title' attribute, it uses the 'title' as label and id
export default function AsideNavBar({ title, children, id }) {
    const [activeComponent, setActiveComponent] = useState("");
    return (
        <div className='aside-nav-bar-grid'>
            <section id={id || title}>
                <h1>{title}</h1>
                {Children.map(children, child =>
                    <ObservedComponent
                        key={child.props.title}
                        callBackFunction={() => {setActiveComponent(child.props.title)}}
                        id={child.props.title}
                    >
                        {child}
                    </ObservedComponent>
                )}
            </section>
            <div className='aside-nav-bar-container'>        
                <aside className="aside-nav-bar">
                    <h3>{title}</h3>    
                    <ul>
                        {Children.map(children, child =>
                            <li key={child.props.title} className={activeComponent === child.props.title? 'active':''}>
                                <a href={`#${child.props.title}`}>{child.props.title}</a>
                            </li>
                        )}
                    </ul>
                </aside>
            </div>    
        </div>
    )
}
import React from 'react';

import './styles.css'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title }) => {
    return(
        <div className="page-header">
            {title}
        </div>
    )
}

export default PageHeader;
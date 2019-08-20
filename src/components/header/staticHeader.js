import React from 'react';
import style from './header.module.css';
import CategoriesButton from './buttonCategories';
import Log from '.././log/log';


const StaticHeader = () => {
					return (
						<div className={style.headerOnScroll}>
							<CategoriesButton />
							<p className={style.siteName}>siteName</p>
							<Log />
						</div>)
}

export default StaticHeader;
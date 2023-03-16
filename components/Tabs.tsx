import React, { useState } from 'react';

function findActiveTab(a) {
	return a.reduce((accumulator, currentValue, i) => {
		if (currentValue.props.active) {
			return i;
		}

		return accumulator;
	}, 0);
}

function tabValidator(tab) {
	return tab.type.displayName === 'Tab' ? true : false;
}

export function Tabs({ children }) {
	const [activeTab, setActiveTab] = useState(findActiveTab(children));

	return (
		<>
			<div className="flex flex-wrap justify-between gap-0 bg-white dark:bg-slate-900">
				{children.map((item, i) => {
					return (
						<div key={i}>
							{tabValidator(item) && (
								<Tab
									key={i}
									currentTab={i}
									activeTab={activeTab}
									setActiveTab={setActiveTab}
									color={item.props.component.props?.color}
								>
									{item.props.children}
								</Tab>
							)}
						</div>
					);
				})}
			</div>
			<div>
				{children.map((item, i) => {
					return (
						<div
							className={`p-10 ${i === activeTab ? 'visible' : 'hidden'}  bg-${
								item.props.component.props?.color
							} rounded-b text-white`}
							key={i}
						>
							{item.props.component}
						</div>
					);
				})}
			</div>
		</>
	);
}

export function Tab({ children, activeTab, currentTab, setActiveTab, color }) {
	return (
		<>
			{/* eslint-disable */}

			<h2
				className={`cursor-pointer rounded px-5  py-3 sm:rounded-t sm:rounded-b-none
      ${
			activeTab === currentTab
				? `bg-${color} text-white`
				: `bg-white dark:bg-slate-900 text-${color}`
		}  `}
				onClick={() => setActiveTab(currentTab)}
			>
				{children}
			</h2>
			{/* eslint-disable */}
		</>
	);
}

Tab.displayName = 'Tab';

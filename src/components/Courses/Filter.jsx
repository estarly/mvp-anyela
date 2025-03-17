"use client";

import React, { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Filter = () => {
	const searchParams = useSearchParams();

	const router = useRouter();
	const pathname = usePathname();

	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const handleSortChange = (event) => {
		router.push(
			pathname + "?" + createQueryString("sort", event.target.value)
		);
	};
	return (
		<div className="col-lg-4 col-md-6 ordering">
			<div className="select-box">
				<select className="form-control" onChange={handleSortChange}>
					<option value="">Sort by (Default DESC)</option>
					<option value="asc">Oldest first</option>
					<option value="price_low">
						Sort by price: low to high
					</option>
					<option value="price_high">
						Sort by price: high to low
					</option>
				</select>
			</div>
		</div>
	);
};

export default Filter;

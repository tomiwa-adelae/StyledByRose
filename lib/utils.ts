import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
	console.log(error);
};

export const preventWrongPhoneNumber = (
	event: React.KeyboardEvent<HTMLInputElement>
) => {
	if (
		event.key === "e" ||
		event.key === "E" ||
		event.key === "-" ||
		event.key === "+" ||
		event.key === "." ||
		event.key === "-" ||
		event.key === "/" ||
		event.key === "?" ||
		event.key === ":" ||
		event.key === ";" ||
		event.key === "(" ||
		event.key === ")" ||
		event.key === "$" ||
		event.key === "&" ||
		event.key === "@" ||
		event.key === "@" ||
		event.key === "=" ||
		event.key === "!" ||
		event.key === "#" ||
		event.key === "%" ||
		event.key === "^" ||
		event.key === "*" ||
		event.key === "~" ||
		event.key === "`" ||
		event.key === ","
	) {
		event.preventDefault();
	}

	if (event.key.startsWith(".")) {
		event.preventDefault();
	}

	if (event.key.startsWith("_")) {
		event.preventDefault();
	}

	if (event.key.startsWith("-")) {
		event.preventDefault();
	}

	if (event.key.startsWith(",")) {
		event.preventDefault();
	}
};

const initialState = {
	imageNumber: 0,
	images: [
		{ number: 0, status: false },
		{ number: 1, status: false },
		{ number: 2, status: false },
		{ number: 3, status: false },
		{ number: 4, status: false },
		{ number: 5, status: false },
		{ number: 7, status: false },
		{ number: 8, status: false },
		{ number: 9, status: false },
		{ number: 10, status: false },
		{ number: 11, status: false },
		{ number: 12, status: false },
		{ number: 13, status: false },
		{ number: 14, status: false },
		{ number: 15, status: false },
		{ number: 16, status: false },
		{ number: 17, status: false },
		{ number: 18, status: false },
		{ number: 19, status: false }
	],
	imagesTable: { hits: [{ webformatURL: "", tags: "" }] },
	reload: 0
};

function SwapAppReducer(state = initialState, action) {
	switch (action.type) {
		case "LIKE":
			return {
				...state,
				images: state.images.map((image, index) => {
					if (index !== state.imageNumber) {
						return image;
					} else
						return {
							number: image.number,
							status: true
						};
				})
			};
		case "SUPERLIKE":
			return {
				...state,
				images: state.images.map((image, index) => {
					if (index !== state.imageNumber) {
						return image;
					} else
						return {
							number: image.number,
							superlike: true
						};
				})
			};
		case "NEXTPROFILE":
			if (state.imageNumber !== 19)
				return {
					...state,
					imageNumber: state.imageNumber + 1
				};
			else
				return {
					...state,
					imageNumber: 0
				};
		case "LASTPROFILE":
			if (state.imageNumber !== 0)
				return {
					...state,
					imageNumber: state.imageNumber - 1
				};
			else
				return {
					...state,
					imageNumber: 19,
					reload: state.reload + 1
				};
		case "SETIMAGES":
			return {
				...state,
				imagesTable: action.imagesFetch
			};
		default:
			return state;
	}
}

export default SwapAppReducer;

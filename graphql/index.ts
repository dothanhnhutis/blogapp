export const createUserMutation = `
	mutation UserCreate($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
                username
				email
				password
				avatarUrl
				role
				id
				updatedAt
				createdAt
			}
		}
	}
`;
export const updateUserMutation = `
	mutation UserUpdate($email: String!, $input: UserUpdateInput! ) {
		userUpdate(by: {email: $email}, input: $input) {
			user {
                username
				email
				password
				avatarUrl
				role
				id
				updatedAt
				createdAt
			}
		}
	}
`;
export const getUserByEmailQuery = `
	query GetUserByEmail($email: String!) {
		user(by: {email: $email}) {
			username
			email
			password
			avatarUrl
			role
			id
			updatedAt
			createdAt
		}
	}
`;

export const createOTPMutation = `
	mutation OtpCreate($input: OtpCreateInput!) {
		otpCreate(input: $input) {
			otp {
				code
				type
				verified
				email
				id
				updatedAt
				createdAt
				expireAt
	  		}
		}
	}
`;

export const updateOTPMutation = `
	mutation OtpUpdate($id: ID!,$input: OtpUpdateInput!) {
		otpUpdate(by: {id: $id},input: $input) {
			otp {
				code
				type
				verified
				email
				id
				updatedAt
				createdAt
				expireAt
	  		}
		}
	}
`;

export const getOTPQuery = `
	query GetOtpByEmail($email: String!, $expireAt: DateTime!) {
		otpSearch(filter: {email: {eq: $email}, verified: {eq: false}, expireAt: {gte: $expireAt}},first: 1) {
			edges {
                node {
					code
					type
					verified
					email
					id
					updatedAt
					createdAt
					expireAt
				}
			}
		}
	}
`;

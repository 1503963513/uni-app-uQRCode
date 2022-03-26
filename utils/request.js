const request = (url, method = 'GET', data, header) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			header: {
				'token': 'daasdwdadasdw',
				...header
			},
			success(res) {
				resolve(res)
			},
			fail() {
				reject(res)
			},
		})
	})
}

export default request
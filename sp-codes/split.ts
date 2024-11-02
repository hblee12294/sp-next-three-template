export const spCode = `
	const _speed = input(2, 0.5, 5);

	const space = getSpace();
	const move = sin(time * _speed) / 2;

	rotateY(time / 2);

	const movingBall = shape(() => {
		color(0.03, 0.25, sin(time * _speed) * 0.5 + 0.5);
		displace(move * 2, 0, 0);
		sphere(0.1);
	})();

	blend(abs(sin(time)));

	displace(vec3(move)); 

	color(1, 0.015, 0.015);
	box(vec3(0.2));
	expand(0.05);
`;

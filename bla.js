.modal-wrapper {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: scale(calc(90 / 100));
	transition: transform 0.3s ease-in-out;
}
@media (min-width: 768px) {
	.modal-wrapper {
		transform: scale(calc(70 / 100));
	}
}
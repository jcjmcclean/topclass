# topclass
Angular directive to conditionally add a class to an element based on it's current window position.

Example markup usage:
```
<header class="header-editor" top-class="fix-to-top" top-padding="0">
	...
</header>
```

Example SCSS:
```
.header-editor {
	width: 100%;

	&.fix-to-top {
		position: fixed;
		top: 0;
		z-index: 2;
	}
}
```

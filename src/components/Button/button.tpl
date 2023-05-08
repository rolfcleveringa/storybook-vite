<!-- [TID] -->
{*
	Parameters:

	variant - string, default: primary
	The variant of the button.

	size - string, default: default
	The size of the button.
    
	disabled - boolean, default: false
	Whether the button is disabled.

    children
    The content of the button.
*}
<button class="button {$variant|escape} {$size|escape} {$disabled|ternary:'disabled':''}">
    {$children|escape}
</button>

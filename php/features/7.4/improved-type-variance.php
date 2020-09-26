<?php

/**
 * Return type limitation
 *
 */
class ParentType {}
class ChildType extends ParentType {}
class AnotherType {}

class A
{
    public function covariantReturnTypes(): ParentType
    { /* … */ }
}

class B extends A
{
    public function covariantReturnTypes(): ChildType
    { /* … */ }
}

 // Fatal error:
 // Declaration of C::covariantReturnTypes(): AnotherType must be compatible with A::covariantReturnTypes(): ParentType in <b>[...][...]</b>
//class C  extends A
//{
//    public function covariantReturnTypes(): AnotherType
//    { /* … */ }
//}

/**
 * Contravariant arguments
 *
 */
class E
{
    public function contraVariantArguments(ChildType $type)
    { /* … */ }
}

class F extends E
{
    public function contraVariantArguments(ParentType $type)
    { /* … */ }
}

// <b>Warning</b>:  Declaration of G::contraVariantArguments(AnotherType $type) should be compatible
// with E::contraVariantArguments(ChildType $type) in <b>[...][...]</b> on line <b>30</b><br />
class G extends E
{
    public function contraVariantArguments(AnotherType $type)
    { /* … */ }
}

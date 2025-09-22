<?php

namespace Http\Discovery\Exception;

use Http\Discovery\Exception;

/**
 * Thrown when a discovery does not find any matches.
 *
 * @final do NOT extend this class, not final for BC reasons
 *
 * @author MÃ¡rk SÃ¡gi-KazÃ¡r <mark.sagikazar@gmail.com>
 */
/* final */ class NotFoundException extends \RuntimeException implements Exception
{
}

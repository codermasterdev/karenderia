<?php

namespace Http\Message\StreamFactory;

use GuzzleHttp\Psr7\Utils;
use Http\Message\StreamFactory;

/**
 * Creates Guzzle streams.
 *
 * @author ÐÐ¸ÑÐ°Ð¸Ð» ÐÑÐ°ÑÐ¸Ð»ÑÐ½Ð¸ÐºÐ¾Ð² <m.krasilnikov@yandex.ru>
 *
 * @deprecated This will be removed in php-http/message2.0. Consider using the official Guzzle PSR-17 factory
 */
final class GuzzleStreamFactory implements StreamFactory
{
    /**
     * {@inheritdoc}
     */
    public function createStream($body = null)
    {
        if (class_exists(Utils::class)) {
            return Utils::streamFor($body);
        }

        return \GuzzleHttp\Psr7\stream_for($body);
    }
}
